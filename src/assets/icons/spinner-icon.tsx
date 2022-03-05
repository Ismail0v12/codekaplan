import React from 'react';

function SpinnerIcon() {
  return (
    <svg width="150px" height="150px" xmlns="http://www.w3.org/2000/svg" display="block" preserveAspectRatio="xMidYMid"
         viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="0" fill="none" stroke="#3434ff" strokeWidth="2">
        <animate attributeName="r" begin="0s" calcMode="spline" dur="1s" keySplines="0 0.2 0.8 1" keyTimes="0;1"
                 repeatCount="indefinite" values="0;40"/>
        <animate attributeName="opacity" begin="0s" calcMode="spline" dur="1s" keySplines="0.2 0 0.8 1" keyTimes="0;1"
                 repeatCount="indefinite" values="1;0"/>
      </circle>
      <circle cx="50" cy="50" r="0" fill="none" stroke="#0b0b2c" strokeWidth="2">
        <animate attributeName="r" begin="-0.5s" calcMode="spline" dur="1s" keySplines="0 0.2 0.8 1" keyTimes="0;1"
                 repeatCount="indefinite" values="0;40"/>
        <animate attributeName="opacity" begin="-0.5s" calcMode="spline" dur="1s" keySplines="0.2 0 0.8 1"
                 keyTimes="0;1" repeatCount="indefinite" values="1;0"/>
      </circle>
    </svg>

  );
}

export default SpinnerIcon;