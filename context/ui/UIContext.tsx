

import {createContext} from 'react' ;

interface ContextProps {
    sideMenuOpen : boolean ;
    isAdding : boolean ; 
    isDragging : boolean ;  
    openSideMenu : () => void , 
    closeSideMenu : () => void , 
    isAddingTask:(data: boolean) => void,
    isNotAddingTask: (data: boolean) => void
    startDragging: () => void
    endDragging: () => void
}


export const UIContext = createContext({} as ContextProps)