const freelancers = [
  { name: "Alice", price: 30, occupation: "Writer" },
  { name: "Bob", price: 50, occupation: "Teacher" },
];
const freelancerName = ["Carol", "Dean", "Edward", "Frank", "Gloria"];
const freelancerOcc = [
  "Programmer",
  "Driver",
  "Dog Walker",
  "Landscaper",
  "Baker",
];
const freelancerPrice = [70, 40, 20, 35, 25];


const main = () => {
  const initial = document.getElementById("static");
  freelancers.forEach( function(element) {
    initial.innerText +=
    element.name + " - " + element.occupation + " - $" + element.price + '\n';
});

};


const body = document.querySelector("body");

const init = () => {

  function addFreelancer() {
    const name =
      freelancerName[Math.floor(Math.random() * freelancerName.length)];
    const occupation =
      freelancerOcc[Math.floor(Math.random() * freelancerOcc.length)];
    const price =
      freelancerPrice[Math.floor(Math.random() * freelancerPrice.length)];
    freelancers.push({ name, occupation, price });
  }

  const randomFreelancer = setInterval(() => {
    addFreelancer();
    render();
    if (freelancers.length >= 12) {
      clearInterval(randomFreelancer);
    }
  }, 2000);

  function averagePrice() {
    const sum = freelancers.reduce((acc, curr) => acc + curr.price, 0);
    return Math.round(sum / freelancers.length);
  }
  const printAverage = () => {
    document.getElementById("average").innerHTML =
      "Average Price: $" + averagePrice();
  };

  const section = document.createElement("section");

  
  function render() {
    
    const element = freelancers[Math.floor(Math.random() * freelancers.length)];
    const list = document.createElement("ul");
    const nameList = document.createElement("li");

    nameList.innerText =
      element.name + " - " + element.occupation + " - $" + element.price;
    printAverage();
    // console.log(averagePrice());
    list.append(nameList);

    section.append(list);
  }

  body.append(section);
};
main();
init();

