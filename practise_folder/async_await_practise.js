function my_async() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello!");
    }, 2000);
  });
}

async function main() {
    let vars = await my_async(); // use await to handle async functions
    console.log(vars);
}

main();