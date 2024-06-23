"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUp = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Avatar_1 = __importDefault(require("@mui/material/Avatar"));
const Button_1 = __importDefault(require("@mui/material/Button"));
const CssBaseline_1 = __importDefault(require("@mui/material/CssBaseline"));
const TextField_1 = __importDefault(require("@mui/material/TextField"));
const FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
const Checkbox_1 = __importDefault(require("@mui/material/Checkbox"));
const Link_1 = __importDefault(require("@mui/material/Link"));
const Grid_1 = __importDefault(require("@mui/material/Grid"));
const Box_1 = __importDefault(require("@mui/material/Box"));
const LockOutlined_1 = __importDefault(require("@mui/icons-material/LockOutlined"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const Container_1 = __importDefault(require("@mui/material/Container"));
const styles_1 = require("@mui/material/styles");
function Copyright(props) {
    return ((0, jsx_runtime_1.jsxs)(Typography_1.default, { variant: "body2", color: "text.secondary", align: "center", ...props, children: ['Copyright © ', (0, jsx_runtime_1.jsx)(Link_1.default, { color: "inherit", href: "https://mui.com/", children: "Your Website" }), ' ', new Date().getFullYear(), '.'] }));
}
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = (0, styles_1.createTheme)();
const SignUp = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    return ((0, jsx_runtime_1.jsx)(styles_1.ThemeProvider, { theme: defaultTheme, children: (0, jsx_runtime_1.jsxs)(Container_1.default, { component: "main", maxWidth: "xs", children: [(0, jsx_runtime_1.jsx)(CssBaseline_1.default, {}), (0, jsx_runtime_1.jsxs)(Box_1.default, { sx: {
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }, children: [(0, jsx_runtime_1.jsx)(Avatar_1.default, { sx: { m: 1, bgcolor: 'secondary.main' }, children: (0, jsx_runtime_1.jsx)(LockOutlined_1.default, {}) }), (0, jsx_runtime_1.jsx)(Typography_1.default, { component: "h1", variant: "h5", children: "Sign up" }), (0, jsx_runtime_1.jsxs)(Box_1.default, { component: "form", noValidate: true, onSubmit: handleSubmit, sx: { mt: 3 }, children: [(0, jsx_runtime_1.jsxs)(Grid_1.default, { container: true, spacing: 2, children: [(0, jsx_runtime_1.jsx)(Grid_1.default, { item: true, xs: 12, sm: 6, children: (0, jsx_runtime_1.jsx)(TextField_1.default, { autoComplete: "given-name", name: "firstName", required: true, fullWidth: true, id: "firstName", label: "First Name", autoFocus: true }) }), (0, jsx_runtime_1.jsx)(Grid_1.default, { item: true, xs: 12, sm: 6, children: (0, jsx_runtime_1.jsx)(TextField_1.default, { required: true, fullWidth: true, id: "lastName", label: "Last Name", name: "lastName", autoComplete: "family-name" }) }), (0, jsx_runtime_1.jsx)(Grid_1.default, { item: true, xs: 12, children: (0, jsx_runtime_1.jsx)(TextField_1.default, { required: true, fullWidth: true, id: "email", label: "Email Address", name: "email", autoComplete: "email" }) }), (0, jsx_runtime_1.jsx)(Grid_1.default, { item: true, xs: 12, children: (0, jsx_runtime_1.jsx)(TextField_1.default, { required: true, fullWidth: true, name: "password", label: "Password", type: "password", id: "password", autoComplete: "new-password" }) }), (0, jsx_runtime_1.jsx)(Grid_1.default, { item: true, xs: 12, children: (0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { control: (0, jsx_runtime_1.jsx)(Checkbox_1.default, { value: "allowExtraEmails", color: "primary" }), label: "I want to receive inspiration, marketing promotions and updates via email." }) })] }), (0, jsx_runtime_1.jsx)(Button_1.default, { type: "submit", fullWidth: true, variant: "contained", sx: { mt: 3, mb: 2 }, children: "Sign Up" }), (0, jsx_runtime_1.jsx)(Grid_1.default, { container: true, justifyContent: "flex-end", children: (0, jsx_runtime_1.jsx)(Grid_1.default, { item: true, children: (0, jsx_runtime_1.jsx)(Link_1.default, { href: "src/SignUp#", variant: "body2", children: "Already have an account? Sign in" }) }) })] })] }), (0, jsx_runtime_1.jsx)(Copyright, { sx: { mt: 5 } })] }) }));
};
exports.SignUp = SignUp;
