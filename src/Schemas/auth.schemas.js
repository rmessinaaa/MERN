const {z} = require('zod');
const registerSchema = z.object({
username: z.string({
    required_error: "Username is required"
}),
email: z.string({
 required_error: "Email es requerido"
}).email({
    message: "Invalid email"
}),
password: z.string({required_error: "Invalid password"}).min(6, {
    message: "La clave debe tener un minimo de 6 caracteres"
})
})

const loginSchema = z.object({
    email: z.string({
     required_error: "Email es requerido"
    }).email({
        message: "Invalid email"
    }),
    password: z.string({required_error: "Invalid password"}).min(6, {
        message: "La clave debe tener un minimo de 6 caracteres"
    })
    })
    module.exports = {registerSchema, loginSchema }