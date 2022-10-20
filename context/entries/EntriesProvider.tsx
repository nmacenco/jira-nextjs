

import { FC, useEffect, useReducer } from 'react';
import { useSnackbar } from 'notistack';
import { Entry } from '../../interfaces';
import { EntriesContext } from './EntriesContext';
import { entriesReducer } from './entriesReducer';
import { NewEntry } from '../../components/ui/NewEntry';
import { entriesApi } from '../../apis';



export interface EntriesState {
    entries : Entry[] ; 
}
const Entries_INITIAL_STATE : EntriesState = {
    entries : [ 

    ] ,
}

interface  EntriesProviderProps {
   children : React.ReactNode
}
export const EntriesProvider : FC<EntriesProviderProps> = ({children})=> {

   const [state,dispatch] = useReducer( entriesReducer , Entries_INITIAL_STATE )

   const {enqueueSnackbar} = useSnackbar()
   const addNewEntry = async (description :string) =>  {

    const {data} = await entriesApi.post<Entry>('/entries', {description})
    
    dispatch ({type : '[Entry] - Add-Entry', payload : data})
    
}

const updateEntry = async (entry : Entry , showSnackBar = false )  => {
        try {
        
            const {data} = await entriesApi.put<Entry>(`/entries/${entry._id}`, entry )
            dispatch({type : '[Entry] - Entry-Updated' , payload : data})
            if (showSnackBar === true) {
                enqueueSnackbar('Entrada actualizada' , {
                    variant : 'success' , 
                    autoHideDuration : 1500, 
                    anchorOrigin: {
                        vertical : 'top', 
                        horizontal : 'right'
                    }
                })
            }
        } catch (error) {
            console.log({error});
            
        }

   }
   
   const refreshEntries = async () => {
        const {data} = await entriesApi.get<Entry[]>('/entries')
        dispatch({type : '[Entry] - Refresh-Data' , payload : data})
   }
   useEffect( () => {
        refreshEntries( )
   }, [])
    
    return (
        <EntriesContext.Provider value ={{
            ...state,
            addNewEntry,
            updateEntry
        }}>

            {children}

        </EntriesContext.Provider>
    )
}