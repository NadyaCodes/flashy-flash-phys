// // // "use client";
// // // import { useState } from "react";
// // // import type { termObject } from "./createTermDefDisplay";

// // // export const createTermMatchDisplay = (
// // //   termObject: termObject,
// // //   termArray: string[],
// // // ) => {
// // //   const allDrops = Object.values(termObject);
// // //   const [selectedAnswers, setSelectedAnswers] = useState<{
// // //     [key: string]: string;
// // //   }>({});
// // //   const handleSelectChange = (
// // //     event: React.ChangeEvent<HTMLSelectElement>,
// // //     key: string,
// // //   ) => {
// // //     const selectedValue = event.target.value;
// // //     setSelectedAnswers({
// // //       ...selectedAnswers,
// // //       [key]: selectedValue,
// // //     });
// // //   };
// // //   return (
// // //     <div>
// // //       {termArray.map((key) => {
// // //         const answer = termObject[key];
// // //         const selectedValue = selectedAnswers[key];

// // //         let indicator = null;
// // //         if (selectedValue === answer) {
// // //           indicator = <span className="text-green-500">✓</span>;
// // //         } else if (selectedValue && selectedValue !== answer) {
// // //           indicator = <span className="text-red-500">✗</span>;
// // //         }
// // //         return (
// // //           <div key={key} className="flex items-center">
// // //             <span className="font-bold">{key}</span>
// // //             <select className="m-2">
// // //               {allDrops.map((drop, index) => (
// // //                 <option key={index} value={drop}>
// // //                   {drop}
// // //                 </option>
// // //               ))}
// // //             </select>
// // //             <div className="ml-2">{indicator}</div>
// // //           </div>
// // //         );
// // //       })}
// // //     </div>
// // //   );
// // // };

// // "use client";
// // import React, { useState } from "react";
// // import type { termObject } from "./createTermDefDisplay";

// // export const createTermMatchDisplay = (
// //   termObject: termObject,
// //   termArray: string[],
// // ) => {
// //   const allDrops = Object.values(termObject);
// //   const [selectedAnswers, setSelectedAnswers] = useState<{
// //     [key: string]: string;
// //   }>({});

// //   const handleSelectChange = (
// //     event: React.ChangeEvent<HTMLSelectElement>,
// //     key: string,
// //   ) => {
// //     const selectedValue = event.target.value;
// //     setSelectedAnswers({
// //       ...selectedAnswers,
// //       [key]: selectedValue,
// //     });
// //   };

// //   return (
// //     <div>
// //       {termArray.map((key) => {
// //         const answer = termObject[key];
// //         const selectedValue = selectedAnswers[key];

// //         let indicator = null;
// //         if (selectedValue === answer) {
// //           indicator = <span className="text-green-500">✓</span>;
// //         } else if (selectedValue && selectedValue !== answer) {
// //           indicator = <span className="text-red-500">✗</span>;
// //         }

// //         return (
// //           <div key={key} className="flex items-center">
// //             <span className="font-bold">{key}</span>
// //             <select
// //               className="m-2"
// //               value={selectedValue}
// //               onChange={(e) => handleSelectChange(e, key)}
// //             >
// //               <option value="">Select an answer</option>
// //               {allDrops.map((drop, index) => (
// //                 <option key={index} value={drop}>
// //                   {drop}
// //                 </option>
// //               ))}
// //             </select>

// //             <div className="ml-2">{indicator}</div>
// //           </div>
// //         );
// //       })}
// //     </div>
// //   );
// // };

// "use client";
// import React, { useState } from "react";
// import type { termObject } from "./createTermDefDisplay";

// export const createTermMatchDisplay = (
//   termObject: termObject,
//   termArray: string[],
// ) => {
//   const allDrops = Object.values(termObject);
//   const [selectedAnswers, setSelectedAnswers] = useState<{
//     [key: string]: string;
//   }>({});

//   const handleSelectChange = (
//     event: React.ChangeEvent<HTMLSelectElement>,
//     key: string,
//   ) => {
//     const selectedValue = event.target.value;
//     setSelectedAnswers({
//       ...selectedAnswers,
//       [key]: selectedValue,
//     });
//   };

//   return (
//     <div>
//       {termArray.map((key) => {
//         const answer = termObject[key];
//         const selectedValue = selectedAnswers[key];

//         let indicator = null;
//         if (selectedValue === answer) {
//           indicator = <span className="text-green-500">✓</span>;
//         } else if (selectedValue && selectedValue !== answer) {
//           indicator = <span className="text-red-500">✗</span>;
//         }

//         return (
//           <div key={key} className="flex items-center">
//             <span className="font-bold">{key}</span>
//             <select
//               className="m-2"
//               value={selectedValue}
//               onChange={(e) => handleSelectChange(e, key)}
//             >
//               <option value="">Select an answer</option>
//               {allDrops.map((drop, index) => (
//                 <option key={index} value={drop}>
//                   {drop}
//                 </option>
//               ))}
//             </select>
//             <div className="ml-2">
//               {selectedValue && `Selected: ${selectedValue}`}
//             </div>
//             <div className="ml-2">{indicator}</div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

"use client";
import React, { useState } from "react";
import type { termObject } from "./createTermDefDisplay";

export const createTermMatchDisplay = (
  termObject: termObject,
  termArray: string[],
) => {
  const allDrops = Object.values(termObject);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: string]: string;
  }>({});

  const handleSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    key: string,
  ) => {
    const selectedValue = event.target.value;
    setSelectedAnswers({
      ...selectedAnswers,
      [key]: selectedValue,
    });
  };

  return (
    <div>
      {termArray.map((key) => {
        const answer = termObject[key];
        const selectedValue = selectedAnswers[key];

        let indicator = null;
        if (selectedValue === answer) {
          indicator = <span className="text-green-500">✓</span>;
        } else if (selectedValue && selectedValue !== answer) {
          indicator = <span className="text-red-500">✗</span>;
        }

        return (
          <div key={key} className="flex items-center">
            <span className="font-bold">{key}</span>
            <select
              className="m-2 text-indigo-900"
              value={selectedValue}
              onChange={(e) => handleSelectChange(e, key)}
            >
              <option value="">Select an answer</option>
              {allDrops.map((drop, index) => (
                <option key={index} value={drop}>
                  {drop}
                </option>
              ))}
            </select>
            <div className="ml-2">{indicator}</div>
          </div>
        );
      })}
    </div>
  );
};
