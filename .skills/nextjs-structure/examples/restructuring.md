### Example 2: Restructuring to Business Modules
**User Input**:
> "Move my dashboard pages into a proper route group structure. It's getting messy."

**Reasoning**:
1.  **Analyze**: "Dashboard" is often a technical term, but in business terms, it might be the **Backoffice** or **Account Management** module. Let's assume it's a "Vendor Portal" business capability.
2.  **Modules**: Create a `(vendor-portal)` route group.
3.  **Scope Rule Application**: Locate all "shared" components that are actually only used by the dashboard (e.g., `DashboardSidebar`, `StatsCard`) and **move them INSIDE** the new module. They are NOT shared; they are scoped to this business module.

**Action/Output**:
```bash
# 1. Create the Business Module container
mkdir -p src/app/\(vendor-portal\)/dashboard

# 2. Move pages into the module
mv src/app/dashboard/* src/app/\(vendor-portal\)/dashboard/

# 3. ENFORCE SCOPE RULE: Move "feature-shared" components into the module
# (Assuming they were incorrectly in src/shared/components)
mkdir -p src/app/\(vendor-portal\)/_components
mv src/shared/components/dashboard-sidebar.tsx src/app/\(vendor-portal\)/_components/
```
