const colors = [
  "#3EC70B",
  "#FA2FB5",
  "#FF8FB1",
  "#EAE509",
  "#0096FF",
  "#F637EC",
];
let index = 0;
function randomColor() {
  if (index > colors.length - 1) {
    index = 0;
  }
  return colors[index++];
}

export default randomColor;
