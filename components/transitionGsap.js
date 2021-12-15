import { Transition, TransitionGroup } from "react-transition-group";
import React, { useRef } from "react";
import { gsap } from "gsap";

const TIMEOUT = 200 / 1000;

const defaults = { ease: "linear", rotation: 0.001, force3D: true };

function PageTransition({ children, route }) {
  const nodeRef = useRef(null);

  return (
    <TransitionGroup style={{ position: "relative" }}>
      <Transition
        // mountOnEnter
        // unmountOnExit
        nodeRef={nodeRef}
        key={route}
        timeout={{
          enter: TIMEOUT,
          exit: TIMEOUT,
        }}
        onEntering={() =>
          gsap.set(nodeRef.current, {
            position: "absolute",
            autoAlpha: 0,
            x: 50,
          })
        }
        onEntered={() =>
          gsap.to(nodeRef.current, {
            duration: TIMEOUT,
            autoAlpha: 1,
            x: 0,
            ...defaults,
          })
        }
        onExiting={() =>
          gsap.to(nodeRef.current, {
            duration: TIMEOUT,
            autoAlpha: 0,
            x: -50,
            ...defaults,
          })
        }

        // onEnter={() =>
        //   gsap.set(nodeRef.current, {
        //     position: "absolute",
        //     opacity: 0,
        //     x: 50,
        //   })
        // }
        // addEndListener={(done) => {
        //   const show = nodeRef.current.style.opacity === "0";
        //   gsap.to(nodeRef.current, {
        //     duration: TIMEOUT,
        //     opacity: show ? 1 : 0,
        //     x: show ? 0 : -50,
        //     ...defaults,
        //     onComplete: done,
        //   });
        // }}
      >
        <div ref={nodeRef} style={{ width: "100%" }}>
          {children}
        </div>
      </Transition>
    </TransitionGroup>
  );
}

export default PageTransition;
