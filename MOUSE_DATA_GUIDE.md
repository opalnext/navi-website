# Adding Mouse Renders to MouseCraft

## Quick Start

To add a new custom mouse build to the website:

### 1. Update Mouse Data
Edit `data/mice.ts` and add a new entry:

\`\`\`typescript
{
  id: '6',
  name: 'Your Mouse Name',
  description: 'Brief description of the mouse',
  sensor: 'PMW3360',
  switches: 'Omron D2FC 20M',
  shell: 'Claw Grip', // or 'Traditional'
  featured: false // set to true to feature on homepage
}
\`\`\`

### 2. Add Mouse Render (Optional)
Place your mouse render image in `public/mice/[id].png`

To use the render in the MouseCard component, update `components/mouse-card.tsx`:
\`\`\`tsx
const imageUrl = `/mice/${mouse.id}.png`
// Then use: <img src={imageUrl || "/placeholder.svg"} alt={mouse.name} />
\`\`\`

### 3. Commit and Push
\`\`\`bash
git add .
git commit -m "Add new mouse: [Mouse Name]"
git push
\`\`\`

GitHub Actions will automatically validate your data and deploy!

## Data Validation

Data is automatically validated on every push. The validation checks:
- All required fields are present
- Shell type is either 'Claw Grip' or 'Traditional'
- No duplicate IDs

## Component Specs

You can add/edit component specs in `components/components-showcase.tsx`.

Current supported components:
- **Sensors**: PMW3360
- **Switches**: Omron D2FC 20M
- **Shells**: Claw Grip, Traditional
