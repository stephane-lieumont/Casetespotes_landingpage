import React, { UIEvent,  useRef} from 'react';
import { useResolvedPath, useMatch } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { MyRouteProps } from '../types/Components.intf';



const MyRoute: React.FunctionComponent<MyRouteProps> = ({path, element, themeLight = false, callbackScroll}) => {
  const resolvedPath = useResolvedPath(path!)
  const match = useMatch(resolvedPath.pathname)
  const scrollPage = useRef<HTMLDivElement>(null)

  const handleScroll = (e: UIEvent) => {
    return callbackScroll ? callbackScroll(e.currentTarget.scrollTop) : null
  }

  return (
    <CSSTransition
        in={match != null}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <div>
          <div ref={scrollPage} onScroll={handleScroll} className={ `page ${themeLight ? 'theme-light' : ''}`}>
            {element}
          </div>
        </div>
    </CSSTransition>
  )
}

export default MyRoute