const { mouseData } = require("../data/mice.ts")

console.log("Validating mouse data...")

const required = ["id", "name", "description", "sensor", "switches", "shell"]
let errors = 0

mouseData.forEach((mouse, index) => {
  required.forEach((field) => {
    if (!mouse[field]) {
      console.error(`Mouse #${index} missing field: ${field}`)
      errors++
    }
  })

  if (!["Claw Grip", "Traditional"].includes(mouse.shell)) {
    console.error(`Mouse #${index} has invalid shell: ${mouse.shell}`)
    errors++
  }
})

if (errors === 0) {
  console.log(`✓ All ${mouseData.length} mice validated successfully`)
  process.exit(0)
} else {
  console.error(`✗ Validation failed with ${errors} errors`)
  process.exit(1)
}
