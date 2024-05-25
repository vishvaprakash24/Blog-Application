// api notification messages
export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: 'loading...',
        message: 'Data is being loaded, please wait'
    },
    success: {
        title: 'Sccess',
        message: 'Data successfully loaded'
    },
    responseFailure: {
        title: 'Error',
        message: 'An error occured while fetching response from the server. Please try again'
    },
    requestFailure: {
        title: 'Error',
        message: 'An error occured while parsing request data'
    },
    networkError: {
        tiitle: 'Error',
        message: 'Unable to connect with the server. Please check internet connectivity and try again later'
    }
}

// api service call 
// sample request
// need service call: {url: '/' method: 'POST/GET/PUT/DELETE' PARAMS: TRUE/FALSE, QUER}