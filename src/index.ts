async function main() {
  console.log('Start main function...')
  await new Promise((resolve) => setTimeout(resolve, 5000))
  console.log('End main function')
}

main().then(() => {
  console.log('Done!')
})
