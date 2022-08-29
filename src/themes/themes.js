import { createTheme } from "@mui/material/styles"

// #43c6ac prime
// #f8ffae second
// #093028 text color

const Form = {
    display: 'grid',
    gridTemplateColumns: '1fr 300px 1fr',
    marginTop:'20px',
};
const Button = createTheme({
    palette: {
        primary: {
            main: '#43c6ac',
            dark: '#17937b',
            contrastText: '#fff'
        },
    },
    typography: {
        fontFamily: 'Raleway, sans-serif',
        fontSize:14,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    maxWidth: '200px',
                    padding: '2px 16px',
                    marginTop:'8px',
                    gridColumnStart: 2,
                    justifySelf: 'center',
                }
            }
        }
    }
      
});

const ButtonLogOut = createTheme({
    palette: {
        primary: {
            main: '#fff',
            // dark: '#093028',
        },
    },
    typography: {
        fontFamily: 'Raleway, sans-serif',
        fontSize:14,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    maxWidth: '200px',
                    padding: '2px 16px',
                }
            }
        }
    }
      
});

const Input = createTheme({
    palette: {
        primary: {
            main: '#43c6ac',
            dark: '#17937b',
            contrastText: '#093028'
        },
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    margin: '8px 0',
                    outline: 'none',
                    gridColumnStart:2,
                    // border: '1px solid #43c6ac',
                    borderRadius: '2px'
                }
            }
        }
    }
});

const ContactList = createTheme({
    components: {
        MuiList: {
            styleOverrides: {
                root: {
                    margin:'0 auto',
                    maxWidth:'500px'
                }
            }
        }
    }
})

const ItemsContent = createTheme({
    components: {
        MuiListItem: {
            styleOverrides: {
                root: {
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    
                    outline:'1px solid #ababab50'
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                root: {
                    paddingLeft:'24px',
                }
            }
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                   //
                }
            }
        },
    }
});

const theme = {
    Button,
    ButtonLogOut,
    Input,
    Form,
    ItemsContent,
    ContactList,
};

export default theme;