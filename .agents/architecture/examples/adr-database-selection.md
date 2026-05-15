# Example: ADR for Database Selection

## User Input
> "I need to choose a database for my new SaaS project. It's a multi-tenant B2B app with complex reporting needs. Help me decide and document the decision."

## Reasoning
The agent will:
1. Gather context about the project requirements (multi-tenant, B2B, complex reports).
2. Evaluate 3 viable options considering the constraints.
3. Make a recommendation based on the trade-off analysis.
4. Generate a formal ADR document.

## Action/Output

```markdown
# ADR-0001: Primary Database Selection for Multi-Tenant SaaS

## Status
Accepted

## Context
We are building a multi-tenant B2B SaaS platform with the following characteristics:
- **Multi-tenancy**: Row-level isolation (shared database, shared schema).
- **Complex Reporting**: Aggregations, time-series analysis, pivot-style queries.
- **Scale**: Initial target of 100 tenants, growing to 1,000+.
- **Team Size**: 3 backend developers (familiar with SQL).
- **Budget**: Moderate (startup, Series A).

The database choice will directly impact query performance, schema flexibility,
operational cost, and the team's velocity.

## Decision Drivers
- Strong relational query support (JOINs, window functions, CTEs).
- Native Row-Level Security (RLS) for multi-tenancy.
- Mature ecosystem with strong ORM support (Prisma, Drizzle).
- Reasonable operational cost at moderate scale.
- Team familiarity.

## Considered Options

### 1. PostgreSQL (Supabase / Self-hosted)
**Pros:**
- Excellent relational query support (CTEs, window functions, JSONB).
- Native RLS for row-level multi-tenancy.
- Mature, battle-tested. Massive ecosystem.
- Supabase provides managed hosting with generous free tier.

**Cons:**
- Scaling beyond 10TB requires careful partitioning strategy.
- Supabase adds a dependency layer.

### 2. MySQL (PlanetScale)
**Pros:**
- Familiar to many developers.
- PlanetScale offers serverless scaling with branching.
- Good write performance.

**Cons:**
- No native RLS (must implement in application layer).
- Weaker window functions and CTE support compared to Postgres.
- PlanetScale deprecated their free tier.

### 3. MongoDB Atlas
**Pros:**
- Flexible schema, good for rapid prototyping.
- Built-in sharding for horizontal scaling.

**Cons:**
- Complex aggregations are harder and less performant than SQL.
- No native JOINs (requires $lookup which is less efficient).
- Not ideal for the complex reporting requirements.
- Team has limited NoSQL experience.

## Decision
**PostgreSQL** (hosted on Supabase for MVP, with migration path to self-hosted RDS/Cloud SQL).

PostgreSQL is the strongest fit because:
1. Its RLS directly solves the multi-tenancy isolation requirement without application-layer hacks.
2. Its advanced SQL features (CTEs, window functions, JSONB) are ideal for complex reporting.
3. The team's SQL expertise means faster development velocity.
4. Supabase provides a low-cost, low-ops starting point with a clear migration path.

## Consequences

### Positive
- Multi-tenancy is enforced at the database level (RLS), reducing security bugs.
- Complex reports can be built with pure SQL, avoiding the need for a separate analytics DB initially.
- Wide ORM support (Prisma, Drizzle, Kysely).

### Negative
- Vertical scaling has limits; may need read replicas at ~500+ tenants.
- Supabase dependency means vendor-specific features (edge functions, auth) create lock-in if adopted.
- Need to establish a partition/archival strategy early for high-volume tables.
```
