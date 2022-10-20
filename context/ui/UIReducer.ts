import { UIState } from './UIProvider';

type UIActionType = 
| {type : 'UI - Open Sidebar'} 
| {type : 'UI - Close Sidebar'} 
| {type : 'UI - Adding Task', payload : boolean}
| {type : 'UI - Not Adding Task' , payload : boolean}
| {type : 'UI - Start Dragging' }
| {type : 'UI - End Dragging' }

export const UIReducer = (state : UIState , action : UIActionType) : UIState => {
    switch (action.type) {
        case 'UI - Open Sidebar':
            return {
                ...state , 
                sideMenuOpen : true , 
            }      
      
        case 'UI - Close Sidebar':
            return {
                ...state , 
                sideMenuOpen : false , 
            }  
        case 'UI - Adding Task':
            return {
                ...state , 
                isAdding : action.payload , 
            }  
        case 'UI - Not Adding Task':
            return {
                ...state , 
                isAdding : action.payload , 
            }  
        case 'UI - Not Adding Task':
            return {
                ...state , 
                isAdding : action.payload , 
            }  
        case 'UI - Start Dragging':
            return {
                ...state , 
                isDragging : true , 
            }  
        case 'UI - End Dragging':
            return {
                ...state , 
                isDragging : false , 
            }  
        default:
            return state ;
    }


}

