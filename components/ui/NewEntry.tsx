import { Box, Button, TextField } from '@mui/material'
import React, { ChangeEvent, useContext, useState } from 'react'
import SaveIcon from '@mui/icons-material/Save';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { UIContext } from '../../context/ui';
export const NewEntry = () => {

    const [inputValue, setInputValue] = useState('')
    const [touched , setTouched] = useState (false )
    const {addNewEntry} = useContext(EntriesContext)
    const {isAdding , isAddingTask} = useContext(UIContext)
    const onTextChange = (e : ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const onSave = () => {
        if(inputValue.length === 0 ) return
        addNewEntry(inputValue)
        isAddingTask(false)
        setTouched(false)
        setInputValue('')
    }
  return (
    <Box
        sx={{marginBottom : 2 , paddingX : 2}}
    >

        {
            isAdding ? (
                <>
                    <TextField
                        fullWidth
                        sx={{marginTop : 2 , marginBottom : 1}}
                        placeholder = 'Nueva tarea'
                        autoFocus
                        multiline
                        label='Nueva tarea'
                        helperText={inputValue.length <= 0 && touched && 'Ingrese un valor'}
                        error = {inputValue.length <= 0 && touched}
                        value = {inputValue}
                        onChange = {onTextChange}
                        onBlur = { () => { setTouched(true) }}
                    ></TextField>
                    <Box display={'flex'}  justifyContent = 'space-around' >
                        <Button 
                            variant = 'text'
                            onClick = { () => isAddingTask(false)}
                        >
                            Cancelar 
                        </Button>
                        <Button 
                            variant = 'outlined'
                            color = 'secondary'
                            endIcon = {<SaveIcon></SaveIcon>}
                            onClick = { onSave }
                        >
                            Guardar 
                        </Button>


                    </Box>
                
                </>
            ) : (
                <Button
                    startIcon = {<AddCircleOutlineIcon/>}
                    variant = 'outlined'
                    fullWidth
                    onClick = { () => isAddingTask(true)}
                >Agregar tarea</Button>
            )
        }



    </Box>
  )
}
