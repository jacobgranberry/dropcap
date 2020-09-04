import { lightTheme } from './lightTheme'
import { darkTheme } from './darkTheme'

const theme = mode => mode === 'dark' ? darkTheme : lightTheme

export default theme;