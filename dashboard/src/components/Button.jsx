// export default function Button(props, title, type) {
//   const variant = {
//     btnPrimary: "bg-black text-white hover:bg-gray-900",
//     btnSecondary: "bg-white text-black border-gray-200 hover:bg-gray-50",
//   };
//   return (
//     const styleVariant = variant[props.variant];
//     <div>
//       <button
//         className={`inline-flex items-center justify-center font-medium w-full px-4 py-2 transition-all duration-200 ease-in-out ${btnStyle[variant]}`}
//         type={type}
//         ...styleVariant
//       >
//         {title}
//       </button>
//     </div>
//   );
// }

export default function Button({ title, type, variant, style }) {
  const buttonStyles = {
    btnPrimary: "bg-black text-white hover:bg-gray-800",
    btnSec: "bg-white text-black hover:bg-gray-50",
  };

  return (
    <button
      className={`w-full rounded-md font-medium py-3 transition-all ease-in-out duration-300 ${buttonStyles[variant]}`}
      type={type}
    >
      {title}
    </button>
  );
}
