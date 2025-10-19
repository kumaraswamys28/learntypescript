console.log("hello");

const root = document.getElementById("root");
root
  ? (() => {
      root.style.display = "flex";
      root.style.alignItems = "center";
      root.style.justifyContent = "center";
      root.innerHTML = "<h1>This is test</h1>";
    })()
  : console.log("No root element found");

root ? root.innerHTML = "<h1 style='color:white'>this is test</h1>" : console.log("root not found");