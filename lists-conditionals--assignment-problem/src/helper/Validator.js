
const MIN_LENGTH = 5;
const MAX_LENGTH = 30;

const constraints = [
    {
        errorMessage: `The input value needs to be greater than ${MIN_LENGTH} chars`,
        validate: function (value) {
            return (value.length > MIN_LENGTH);
        }
    },
    {
        errorMessage: `The input value needs to be less than ${MAX_LENGTH} chars`,
        validate: function (value) {
            return (value.length < MAX_LENGTH)
        }
    }
]

const validate = (input) => {
    for (let constraint of constraints) {
        const { errorMessage, validate } = constraint;
        if (!validate(input)) {
            return {
                isError: true,
                errorMessage
            }
        }
    }
    return {
        isError: false,
        errorMessage: ""
    }
}

export default {
    validate
}