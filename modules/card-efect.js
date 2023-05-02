// const el = document.getElementById(`imagenes`)
// const height = el.clientHeight
// const width = el.clientWidth

// el.addEventListener('mousemove', (evt)=>{
//     const {layerX, layerY} = evt

//     const yRotation = (
//         (layerX - width / 2) / width
//     ) * 5

//         const xRotation = (
//         (layerY - height / 2) / height
//     ) * 5

//     const string = `
//     perspective(400px)
//     scale(1.05)
//     rotateX(${xRotation}deg)
//     rotateY(${yRotation}deg)`

//     el.style.transform = string
// })

// el.addEventListener('mouseout', () => {
//     el.style.transform = `
//     perspective(400px)
//     scale(1)
//     rotateX(0)
//     rotateY(0)`
// })

const $ = document;

export default function effect(){
const el = $.querySelectorAll('.item-img-work');

el.forEach((el) => {
  const height = el.clientHeight;
  const width = el.clientWidth;

  el.addEventListener('mousemove', (evt) => {
    const { layerX, layerY } = evt;

    const yRotation = ((layerX - width / 2) / width) * 7.5;
    const xRotation = ((layerY - height / 2) / height) * 7.5;

    const string = `
      perspective(500px)
      scale(1.05)
      rotateX(${xRotation}deg)
      rotateY(${yRotation}deg)`;

    el.style.transform = string;
  });

  el.addEventListener('mouseout', () => {
    el.style.transform = `
      perspective(500px)
      scale(1)
      rotateX(0)
      rotateY(0)`;
  });
});
}
