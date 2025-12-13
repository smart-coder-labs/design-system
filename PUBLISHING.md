# Guía de Publicación

Esta guía explica cómo publicar el Apple Design System a GitHub Package Registry.

## Pre-requisitos

1. **Cuenta de GitHub** con acceso al repositorio
2. **GitHub Personal Access Token** con permisos `write:packages` y `read:packages`
3. **npm configurado** para GitHub Package Registry

## Configuración Inicial

### 1. Configurar npm para GitHub Packages

Crea o edita `~/.npmrc` en tu directorio home:

```bash
@smart-coder-labs:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

> **Nota:** Reemplaza `YOUR_GITHUB_TOKEN` con tu Personal Access Token de GitHub.

### 2. Verificar autenticación

```bash
npm whoami --registry=https://npm.pkg.github.com
```

Deberías ver tu nombre de usuario de GitHub.

## Proceso de Publicación

### 1. Actualizar la versión

Edita `package.json` y actualiza el campo `version`:

```json
{
  "version": "1.0.x"
}
```

O usa npm para hacerlo automáticamente:

```bash
# Incrementa patch version (1.0.0 -> 1.0.1)
npm version patch

# Incrementa minor version (1.0.0 -> 1.1.0)
npm version minor

# Incrementa major version (1.0.0 -> 2.0.0)
npm version major
```

### 2. Ejecutar el build

```bash
npm run build
```

Este comando:
- Limpia el directorio `dist/`
- Compila TypeScript a JavaScript
- Copia el archivo `globals.css`
- Genera archivos de tipos `.d.ts`

### 3. Verificar archivos a publicar

```bash
npm pack --dry-run
```

Esto muestra qué archivos se incluirán en el paquete. Deberías ver:
- `dist/` - Archivos compilados
- `README.md`
- `package.json`
- Y otros archivos esenciales

**No deberías ver:**
- `node_modules/`
- `.storybook/`
- `stories/`
- Archivos fuente (`.ts`, `.tsx`) fuera de `dist/`

### 4. Crear commit y tag

```bash
git add .
git commit -m "chore: release v1.0.x"
git tag v1.0.x
git push origin main --tags
```

### 5. Publicar a GitHub Packages

```bash
npm publish
```

El script `prepublishOnly` se ejecutará automáticamente antes de publicar, asegurando que el build esté actualizado.

## Verificación Post-Publicación

### 1. Verificar en GitHub

Ve a:
```
https://github.com/smart-coder-labs/design-system/packages
```

Deberías ver tu nueva versión listada.

### 2. Probar instalación

En un proyecto de prueba:

```bash
npm install @smart-coder-labs/design-system@1.0.x
```

### 3. Verificar archivos instalados

```bash
cd node_modules/@smart-coder-labs/design-system
ls -la
```

Deberías ver:
- `dist/` con todos los archivos compilados
- `package.json`
- `README.md`

## Publicación de Versiones Beta

Para publicar una versión beta o alpha:

```bash
# Actualizar a versión beta
npm version 1.1.0-beta.1

# Publicar con tag
npm publish --tag beta
```

Instalar versión beta:

```bash
npm install @smart-coder-labs/design-system@beta
```

## Checklist Pre-Publicación

Antes de publicar, verifica:

- [ ] Todos los tests pasan (si existen)
- [ ] El build se ejecuta sin errores (`npm run build`)
- [ ] La versión en `package.json` es correcta
- [ ] `CHANGELOG.md` está actualizado (si existe)
- [ ] Los cambios están commiteados en git
- [ ] La documentación está actualizada
- [ ] `MIGRATION.md` incluye breaking changes (si hay)

## Solución de Problemas

### Error: 401 Unauthorized

**Causa:** Token de GitHub inválido o sin permisos.

**Solución:**
1. Verifica que tu token tenga permisos `write:packages`
2. Verifica que el token no haya expirado
3. Asegúrate de que `~/.npmrc` esté configurado correctamente

### Error: 403 Forbidden

**Causa:** No tienes permisos para publicar en este paquete.

**Solución:**
1. Verifica que tengas permisos de escritura en el repositorio
2. Contacta al propietario del repositorio

### Error: 404 Not Found

**Causa:** El scope del paquete no coincide con el repositorio.

**Solución:**
Verifica que en `package.json`:
- `name` comience con `@smart-coder-labs/`
- `repository.url` apunte al repositorio correcto

### El build falla

**Solución:**
```bash
# Limpia node_modules y reinstala
rm -rf node_modules package-lock.json
npm install

# Limpia build anterior
npm run clean

# Intenta build de nuevo
npm run build
```

## Rollback de una Versión

Si necesitas revertir una versión publicada:

```bash
# Deprecar una versión (no se puede eliminar)
npm deprecate @smart-coder-labs/design-system@1.0.x "Versión con bugs críticos, usar 1.0.y"
```

**Nota:** GitHub Package Registry no permite eliminar versiones publicadas, solo deprecarlas.

## Automatización (GitHub Actions)

Para automatizar la publicación, puedes usar GitHub Actions:

```yaml
# .github/workflows/publish.yml
name: Publish Package

on:
  release:
    types: [created]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
          registry-url: 'https://npm.pkg.github.com'
      - run: npm ci
      - run: npm run build
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## Mejores Prácticas

1. **Semantic Versioning**: Sigue [SemVer](https://semver.org/)
   - `MAJOR`: Cambios incompatibles
   - `MINOR`: Nueva funcionalidad compatible
   - `PATCH`: Correcciones de bugs compatibles

2. **Changelog**: Mantén un registro de cambios actualizado

3. **Testing**: Siempre prueba en un proyecto consumidor antes de publicar

4. **Documentation**: Actualiza la documentación antes de publicar

5. **Git Tags**: Usa tags para cada versión publicada

## Contacto

Si tienes problemas al publicar, contacta al equipo de Smart Coder Labs.
