import { FC, useReducer } from "react";
import { UIContext } from "./UIContext";
import { UIReducer } from "./UIReducer";



export interface UIState {
    sideMenuOpen : boolean ;
    isAdding : boolean ;
    isDragging : boolean ;
}
const UI_INITIAL_STATE : UIState = {
    sideMenuOpen : false ,
    isAdding : false ,
    isDragging : false ,

}

interface  UIProviderProps {
    children : React.ReactNode
}
export const UIProvider : FC<UIProviderProps> = ({children})=> {

    const [ state , dispatch] = useReducer( UIReducer , UI_INITIAL_STATE )

    const openSideMenu = () => {
        dispatch({type: 'UI - Open Sidebar'})
    }
    const closeSideMenu = () => {
        dispatch({type: 'UI - Close Sidebar'})
    }

    const isAddingTask = (data: boolean) => {
        dispatch({type : 'UI - Adding Task' , payload : data})
    }
    const isNotAddingTask = (data: boolean) => {
        dispatch({type : 'UI - Adding Task', payload : data})
    }
    const startDragging = () => {
        dispatch({type : 'UI - Start Dragging' })
    }
    const endDragging = () => {
        dispatch({type : 'UI - End Dragging' })
    }

    return (
        <UIContext.Provider value ={{
            ...state,

            //Methods
            openSideMenu,
            closeSideMenu,
            isAddingTask,
            isNotAddingTask,
            startDragging,
            endDragging,
            

        }}>

            {children}

        </UIContext.Provider>
    )
}

