let browsers = ['chrome', 'opera', 'edge', 'safari', 'firefox'];

for (let browser in browsers) { // по ключу
   console.log(browser);
}

for (let browser of browsers) { // по значению
   console.log(browser);
}