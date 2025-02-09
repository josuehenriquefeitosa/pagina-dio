import {ButtonContainer} from './styles';

export const Button = ({title, variant="primary", onClick}) => {
    return(
        <ButtonContainer variant={variant} onClick={onClick}>
            {title}
        </ButtonContainer>
    )
}