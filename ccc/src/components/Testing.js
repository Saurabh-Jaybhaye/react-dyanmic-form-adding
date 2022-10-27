import React from "react";

export const Testing = (props) => {
  const allRam = props.data.map((object) => {
    return parseInt(object.maxRam);
  });

  const maxRaminall = Math.max(...allRam);
  // const deploymentData = props.data.map((i) => (
  //   <li>
  //     <li>{"id = " + i.id}</li>
  //     <li> {"Deployment = " + i.deployment} </li>{" "}
  //     <li> {"minPods = " + i.minPods} </li>
  //     <li> {"maxPods = " + i.maxPods} </li>
  //     <li> {"minRam = " + i.minRam}</li>
  //     <li> {"minRamUnit = " + i.minRamUnit}</li>{" "}
  //     <li>{"maxRam = " + i.maxRam}</li>
  //     <li> {"maxRamUnit = " + i.maxRamUnit}</li>{" "}
  //     <li> {"minvCPU = " + i.minVcpu}</li>
  //     <li> {"minvCPUunit = " + i.minVcpuUnit}</li>
  //     <li> {"maxvCPU = " + i.maxVcpu}</li>
  //     <li> {"maxvCPUunit = " + i.maxVcpuUnit}</li>{" "}
  //     <li>/{"Storage = " + i.storage}</li>
  //     <li> {"StorageUnit = " + i.storageUnit}</li>
  //   </li>
  // ));
  return (
    <div>
      {/* <h3>{allRam}</h3> */}
      <h3>{maxRaminall}</h3>
    </div>
  );
};
