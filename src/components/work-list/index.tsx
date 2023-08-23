import { ScrollTrigger, Tween } from "react-gsap";

import classes from "./index.module.scss";

type Work = {
  id: number;
  workName: string;
  onlineAddress?: string;
  codeAddress: string;
  description: string;
  tag?: Array<string>;
  cover?: string;
};

export default function WorkList({ workList }: Record<string, Array<Work>>) {
  return (
    <>
      <ScrollTrigger start="-300px center" end="-200px center" scrub={2}>
        {workList.map((work) => {
          return (
            <Tween
              key={work.id}
              from={{
                y: "200px",
              }}
              to={{
                y: "0px",
              }}
            >
              <div>hhhh</div>
            </Tween>
          );
        })}
      </ScrollTrigger>
    </>
  );
}
