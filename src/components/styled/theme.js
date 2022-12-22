import { css } from 'styled-components';


const theme = {
    alert: {
        primary: css`
            color: #004085;
            background-color: #cce5ff;
            border-color: #b8daff;
            `,
        secondary: css`
            color: #383d41;
            background-color: #e2e3e5;
            border-color: #d6d8db;
            `
    },
    button: {
        variants: {
            primary: css`
            color: #fff;
            background-color: #007bff;
            border-color: #007bff;

            &:hover {
                color: #fff;
                background-color: #0069d9;
                border-color: #0062cc;
            }
            `,
            secondary: css`
            color: #fff;
            background-color: #6c757d;
            border-color: #6c757d;

            &:hover {
                color: #fff;
                background-color: #5a6268;
                border-color: #545b62;
            }
            `
        },
        sizes: {
            sm: css`
            padding: 0.25rem 0.5rem;
            font-size: .875rem;
            line-height: 1.5;
            border-radius: 0.2rem;
            `,
            lg: css`
            padding: 0.5rem 1rem;
            font-size: 1.25rem;
            line-height: 1.5;
            border-radius: 0.3rem;
            `
        }
    },
    card: {
        imgVariants: {
            top: css`
            border-top-left-radius: calc(0.25rem - 1px);
            border-top-right-radius: calc(0.25rem - 1px);
            `
        }
    }
}

export default theme