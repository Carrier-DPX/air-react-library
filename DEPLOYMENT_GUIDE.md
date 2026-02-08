# Deployment Guide: Icon Component to GitHub, npm, and Figma

This guide walks you through publishing the Icon component to GitHub, npm, and connecting it to Figma via Code Connect.

## Prerequisites

- Git configured and authenticated with GitHub
- npm account with access to `@carrier-dpx` scope
- Figma account with access to your Icon Library file
- Node.js and npm installed

## Step 1: Clean Up and Verify Changes

First, let's make sure everything is ready:

```bash
cd /Users/ryan.young/Documents/Github/air-react-library

# Check git status
git status

# Verify Icon component is exported correctly
cat src/index.ts | grep Icon
```

## Step 2: Commit and Push to GitHub

### 2.1 Stage Your Changes

```bash
# Add all Icon-related files
git add src/components/Icon/
git add src/index.ts

# Check what will be committed
git status
```

### 2.2 Commit Changes

```bash
git commit -m "feat: Add Icon component with Figma Code Connect support

- Add Icon wrapper component matching Bitbucket implementation
- Add Figma Code Connect mappings for 10 sample icons
- Support outlined/filled variants via Style property
- Export Icon component from main index"
```

### 2.3 Push to GitHub

```bash
# Push to your main/master branch
git push origin main
# OR if your branch is named differently:
# git push origin master
```

## Step 3: Update npm Package

### 3.1 Update Version

Update the version in `package.json`. Since this is a new feature, bump the minor version:

```bash
# Option 1: Manual edit
# Change "version": "0.5.0" to "version": "0.6.0" in package.json

# Option 2: Use npm version command
npm version minor  # This will bump 0.5.0 → 0.6.0
```

### 3.2 Verify Package Contents

Make sure `package.json` includes the Icon component in the files array:

```json
{
  "files": [
    "src",
    "README.md"
  ]
}
```

This ensures the Icon component files are included when publishing.

### 3.3 Publish to npm

```bash
# Make sure you're logged into npm
npm whoami

# If not logged in, authenticate:
npm login

# Publish the package
npm publish --access public
```

**Note**: The `--access public` flag is needed because the package is scoped (`@carrier-dpx/air-react-library`).

## Step 4: Connect to Figma via Code Connect

### 4.1 Install Figma CLI (if not already installed)

```bash
npm install -g @figma/code-connect
```

### 4.2 Initialize Figma Code Connect

```bash
cd /Users/ryan.young/Documents/Github/air-react-library

# Initialize Code Connect (if not already done)
figma connect init
```

This will create a `.figma` directory with configuration files.

### 4.3 Configure Code Connect

The `.figma/config.json` file should reference your Figma file. Update it if needed:

```json
{
  "figmaFileKey": "RT43n0bKuuIt7ylllD3DR0",
  "figmaFileUrl": "https://www.figma.com/design/RT43n0bKuuIt7ylllD3DR0/Icon-Library"
}
```

### 4.4 Connect to Figma

```bash
# Connect to Figma (this will open browser for authentication)
figma connect
```

This command will:
1. Scan your codebase for `.figma.tsx` files
2. Open your browser to authenticate with Figma
3. Link your code to Figma components

### 4.5 Publish Connections

After connecting, publish the connections:

```bash
# Publish all connections to Figma
figma connect publish
```

Or use the npm script:

```bash
npm run figma:publish
```

## Step 5: Test in Figma

1. **Open Figma**: Go to your Icon Library file
   - URL: https://www.figma.com/design/RT43n0bKuuIt7ylllD3DR0/Icon-Library

2. **Enable Dev Mode**: Click "Dev Mode" in the top right

3. **Select Settings Icon**: Click on the Settings icon component

4. **Check Code Panel**: In the right panel, you should see:
   - React code example showing `<Icon fontSize="medium"><SettingsIcon variant="outlined" />`
   - The code should update when you change the "Style" property in Figma

5. **Test Variants**: 
   - Change "Style" property from "Outlined" to "Filled"
   - Verify the code updates to show `variant="filled"`

## Troubleshooting

### Issue: `figma connect` command not found
**Solution**: Install globally: `npm install -g @figma/code-connect`

### Issue: Authentication fails
**Solution**: Make sure you have access to the Figma file and are logged into the correct Figma account

### Issue: Connections not showing in Figma
**Solution**: 
1. Verify the Figma URL in `SettingsIcon.figma.tsx` is correct
2. Make sure you ran `figma connect publish`
3. Refresh Figma and check Dev Mode is enabled

### Issue: npm publish fails with permission error
**Solution**: 
1. Verify you're logged in: `npm whoami`
2. Check you have publish access to `@carrier-dpx` scope
3. Contact npm organization admin if needed

### Issue: Icon component not found in published package
**Solution**: 
1. Verify `src/components/Icon/` is included in git
2. Check `package.json` files array includes `"src"`
3. Re-publish: `npm publish --access public`

## Next Steps

Once testing is successful:

1. **Add More Icons**: Create `.figma.tsx` files for the remaining 690 icons
2. **Update Icon Imports**: Replace placeholder imports with actual icon library imports
3. **Document Usage**: Update README.md with Icon component usage examples

## Verification Checklist

- [ ] Icon component committed to git
- [ ] Changes pushed to GitHub
- [ ] Package version updated
- [ ] Package published to npm
- [ ] Figma Code Connect initialized
- [ ] Connections published to Figma
- [ ] Settings icon tested in Figma Dev Mode
- [ ] Variant switching works correctly
