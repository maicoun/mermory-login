import React, { useState } from "react";
import { TextField, Button, Box, Typography, LinearProgress, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material"; // Importando ícones para visualização da senha
import OverviewImage from "../assets/image/Overview.png";
import Logo from "../assets/image/logo.png"; // Caminho da logo
import GoogleIcon from "../assets/image/google.png"; // Caminho do ícone do Google
import AppleIcon from "../assets/image/apple.png"; // Caminho do ícone da Apple
import FacebookIcon from "../assets/image/facebook.webp"; // Caminho do ícone do Facebook
import "../index.css";
// Importando as imagens da primeira coluna
import F1 from "../assets/image/1st Column/F1.png";
import F2 from "../assets/image/1st Column/F2.png";
import F3 from "../assets/image/1st Column/F3.png";
import F4 from "../assets/image/1st Column/F4.png";
import F5 from "../assets/image/1st Column/F5.png";
import F6 from "../assets/image/1st Column/F6.png";
import F7 from "../assets/image/1st Column/F7.png";
import F8 from "../assets/image/1st Column/F8.png";
import F9 from "../assets/image/1st Column/F9.png";

// Importando as SEGUNDA da primeira coluna
import C1 from "../assets/image/2nd Column/F1.png";
import C2 from "../assets/image/2nd Column/F2.png";
import C3 from "../assets/image/2nd Column//F3.png";
import C4 from "../assets/image/2nd Column/F4.png";
import C5 from "../assets/image/2nd Column/F5.png";

import T1 from "../assets/image/3rd Column/F1.png";
import T2 from "../assets/image/3rd Column/F2.png";
import T3 from "../assets/image/3rd Column/F3.png";
import T4 from "../assets/image/3rd Column/F4.png";
import T5 from "../assets/image/3rd Column/F5.png";
import T6 from "../assets/image/3rd Column/F6.png";
import T7 from "../assets/image/3rd Column/F7.png";
import T8 from "../assets/image/3rd Column/F8.png";
import T9 from "../assets/image/3rd Column/F9.png";
import T10 from "../assets/image/3rd Column/F10.png";


const LoginForm: React.FC = () => {
    const [password, setPassword] = useState("");
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [showPassword, setShowPassword] = useState(false); // Controle do ícone de visualização da senha

    // Função para medir a força da senha
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setPassword(value);

        // Calculando a força da senha com base no comprimento
        let strength = 0;
        if (value.length > 5) strength += 1;
        if (value.length > 10) strength += 1;
        if (/[A-Z]/.test(value)) strength += 1;
        if (/[0-9]/.test(value)) strength += 1;
        if (/[!@#$%^&*]/.test(value)) strength += 1;

        setPasswordStrength(strength);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert("Login efetuado!");
    };

    // Função para alternar a visibilidade da senha
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Box
            display="flex"
            flexDirection="row"
            minHeight="100vh"
            sx={{
                background: "linear-gradient(90deg, #2C9CE2 0.01%, #BFADF2 100%)",
            }}
        >
            {/* Logo no canto superior esquerdo */}
            <Box
                position="absolute"
                top="16px"
                left="16px"
                zIndex={10}
                display="flex"
                alignItems="center"
            >
                <Box
                    component="img"
                    src={Logo}
                    alt="Logo"
                    sx={{
                        height: "40px",
                        objectFit: "contain",
                    }}
                />
            </Box>

            {/* Coluna do Formulário */}
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                flex={1}
                px={3}
                zIndex={20} // Garantir que o formulário tenha um zIndex maior
                position="relative"
            >
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        maxWidth: "400px",
                        width: "100%",
                        padding: "20px",
                        bgcolor: "#fff",
                        borderRadius: "16px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    }}
                >
                    <Typography
                        variant="h4"
                        align="center"
                        mb={3}
                        sx={{ fontWeight: "bold", fontSize: "1.8rem" }}
                    >
                        <span
                            style={{
                                background: "linear-gradient(90deg, #2C9CE2 0.01%, #BFADF2 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                fontSize: "1.8rem",
                                fontWeight: "bold",
                            }}
                        >
                            Get Started
                        </span>{" "}
                        <span style={{ color: "#000", fontSize: "1.8rem" }}>
                            to unlock your study potential.
                        </span>
                    </Typography>

                    <Typography variant="body1" align="center" mb={2}>
                        to unlock your study potential.
                    </Typography>

                    {/* Already have an account? Sign In */}
                    <Typography variant="body2" align="center" mb={3}>
                        <span style={{ color: "#ab9494" }}>Already have an account?</span>{" "}
                        <span style={{ color: "#4facfe", cursor: "pointer", textDecoration: "unset" }}>
                            Sign In
                        </span>
                    </Typography>

                    {/* Botões de Login */}
                    <Button
                        variant="outlined"
                        fullWidth
                        sx={{
                            mb: 1,
                            color: "#000",
                            borderColor: "#ddd",
                            textTransform: "none",
                            "&:hover": { backgroundColor: "#f5f5f5" },
                        }}
                    >
                        <Box component="img" src={GoogleIcon} alt="Google" sx={{ mr: 1, height: 20 }} />
                        Continue with Google
                    </Button>
                    <Button
                        variant="outlined"
                        fullWidth
                        sx={{
                            mb: 1,
                            color: "#000",
                            borderColor: "#ddd",
                            textTransform: "none",
                            "&:hover": { backgroundColor: "#f5f5f5" },
                        }}
                    >
                        <Box component="img" src={AppleIcon} alt="Apple" sx={{ mr: 1, height: 20 }} />
                        Continue with Apple
                    </Button>
                    <Button
                        variant="outlined"
                        fullWidth
                        sx={{
                            mb: 3,
                            color: "#000",
                            borderColor: "#ddd",
                            textTransform: "none",
                            "&:hover": { backgroundColor: "#f5f5f5" },
                        }}
                    >
                        <Box component="img" className="facebooklogo" src={FacebookIcon} alt="Facebook" sx={{ mr: 1, height: 20 }} />
                        Continue with Facebook
                    </Button>

                    {/* Linha com "OR" */}
                    <Box display="flex" alignItems="center" mb={3}>
                        <Box sx={{ flexGrow: 1, borderBottom: "1px solid #ddd" }} />
                        <Typography className="or-line" variant="body2" sx={{ mx: 2 }}>OR</Typography>
                        <Box sx={{ flexGrow: 1, borderBottom: "1px solid #ddd" }} />
                    </Box>

                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        placeholder="Enter your email"
                        InputLabelProps={{
                            shrink: true, // Garante que o label fique acima
                        }}
                    />

                    <Box position="relative" mb={2}>
                        <TextField
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            required
                            placeholder="Enter your password"
                            onChange={handlePasswordChange}
                            InputLabelProps={{
                                shrink: true, // Garante que o label "Password" fique sempre fora
                            }}
                        />
                        <IconButton
                            onClick={togglePasswordVisibility}
                            sx={{
                                position: "absolute",
                                right: "10px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                padding: 0,
                                "&:focus": {
                                    outline: "none", // Remove a borda ao clicar no ícone
                                },
                            }}
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </Box>
                

                    {/* Barra de Força da Senha */}
                    <Box display="flex" className="passwordBar" justifyContent="space-between" mt={2}>
                        {[...Array(4)].map((_, index) => (
                            <Box
                                key={index}
                                sx={{
                                    width: "22%",
                                    height: "8px",
                                    borderRadius: "4px",
                                    backgroundColor: index < passwordStrength ? "#4caf50" : "#ddd",
                                    transition: "background-color 0.3s",
                                }}
                            />
                        ))}
                    </Box>
                    <Typography className="sub-progress" variant="body2" color="textSecondary" align="left">
                        Make your password strong by combining letters, numbers, and symbols.
                    </Typography>
                    <TextField
                        label="Birthday"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        placeholder="DD/MM/YYYY"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                    />


                    <Button
                        className="button-go"
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 2, textTransform: "none" }}
                    >
                        Continue
                    </Button>

                    {/* Frase de aceitação */}
                    <Typography
                        className="continue-subtitle"
                        variant="body2"
                        align="center"
                        mt={2}
                        sx={{ color: "#666", fontSize: "0.9rem" }}
                    >
                        By continuing you agree to our <span style={{ color: "#4facfe", cursor: "pointer" }}>User Agreement</span> and acknowledge our <span style={{ color: "#4facfe", cursor: "pointer" }}>Privacy Policy</span>.
                    </Typography>
                </Box>
            </Box>

            {/* Coluna de Imagens */}
            <Box
                className="image-column"  // Classe para a coluna de imagem
                flex={1}
                position="relative"
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{
                    backgroundColor: "unset",
                    overflow: "hidden",
                    zIndex: 5, // A imagem ficará atrás
                    flexDirection: "row",
                }}
            >
                {/* Primeira coluna de imagens */}
                {/* Primeira coluna de imagens */}
                <Box sx={{ display: "flex", flexDirection: "column", marginRight: 2 }} className="first-column">
                    {[F1, F2, F3, F4, F5, F6, F7, F8].map((image, index) => (
                        <Box
                            key={index}
                            component="img"
                            src={image}
                            alt={`Imagem ${index + 1}`}
                            sx={{
                                objectFit: "cover",
                                width: "100%",
                                height: "auto",
                                marginBottom: 2,
                                borderRadius: "8px",
                            }}
                        />
                    ))}
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", marginRight: 2 }} className="second-column">
                    {[C1, C2, C3, C4].map((image, index) => (
                        <Box
                            key={index}
                            component="img"
                            src={image}
                            alt={`Imagem ${index + 9}`}
                            sx={{
                                objectFit: "cover",
                                width: "100%",
                                height: "auto",
                                marginBottom: 2,
                                borderRadius: "8px",
                            }}
                        />
                    ))}
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column" }} className="third-column">
                    {[T1, T2, T3, T4, T5, T6, T7, T8].map((image, index) => (
                        <Box
                            key={index}
                            component="img"
                            src={image}
                            alt={`Imagem ${index + 14}`}
                            sx={{
                                objectFit: "cover",
                                width: "100%",
                                height: "auto",
                                marginBottom: 2,
                                borderRadius: "8px",
                            }}
                        />
                    ))}
                </Box>

            </Box>
        </Box>
    );
};

export default LoginForm;
