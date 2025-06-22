"use client";
import CountUp from 'react-countup';
function page() {
  return (
    <div>
        <h1>hello would</h1>
    <h2>Count Up Example<CountUp start={0} end={10000} duration={4} delay={0}/> +</h2>
    </div>
  )
}

export default page