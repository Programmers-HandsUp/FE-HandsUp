"use client";
import { useFunnel } from "../_hooks/useFunnel";
const OnBoarding = () => {
  const [Funnel, setFunnel] = useFunnel(["a1", "a2", "a3"], "a1");
  return (
    <div className="">
      <Funnel>
        <Funnel.Step name="a1">
          <p>ㅁ1</p> <input />
          <button onClick={() => setFunnel("a2")}>a1</button>
        </Funnel.Step>
        <Funnel.Step name="a2">
          <p>ㅁ2</p> <input />
          <button onClick={() => setFunnel("a3")}>a2</button>
        </Funnel.Step>
        <Funnel.Step name="a3">
          <p>ㅁ3</p> <input />
          <button onClick={() => setFunnel("a1")}>a3</button>
        </Funnel.Step>
      </Funnel>
    </div>
  );
};
export default OnBoarding;
