import { Transition, TransitionGroup } from "react-transition-group";
import React, { useRef } from "react";

const TIMEOUT = 200;

const getTransitionStyles = {
  entering: {
    position: `absolute`,
    opacity: 0,
    transform: `translateX(50px)`,
  },
  entered: {
    transition: `opacity ${TIMEOUT}ms linear, transform ${TIMEOUT}ms linear`,
    opacity: 1,
    transform: `translateX(0px)`,
  },
  exiting: {
    transition: `opacity ${TIMEOUT}ms linear, transform ${TIMEOUT}ms linear`,
    opacity: 0,
    transform: `translateX(-50px)`,
  },
};

function PageTransition({ children, route }) {
  const nodeRef = useRef(null);

  return (
    <TransitionGroup style={{ position: "relative" }}>
      <Transition
        nodeRef={nodeRef}
        key={route}
        timeout={{
          enter: TIMEOUT,
          exit: TIMEOUT,
        }}
      >
        {(status) => (
          <div
            ref={nodeRef}
            style={{
              ...getTransitionStyles[status],
            }}
          >
            {children}
          </div>
        )}
      </Transition>
    </TransitionGroup>
  );
}

export default PageTransition;
