import React from 'react';
import { Text , TouchableOpacity} from 'react-native';
import { Modal } from './components';
import DatePicker from './DatePicker';

interface IModalDatePicker{
    locale?: string,
    color?: string,
    onSelect?: (date: Date) => void,
    onForward?: (date: Date) => void,
    onBack?: (date: Date) => void,
    onHidden?: () => void,
    button?: React.ReactNode,
    style?: any,
    isHideOnSelect?: boolean,
    initialDate?: Date,
    language?: any
}
 
class ModalDatePicker extends React.Component<IModalDatePicker>{
    modal: Modal | null = null;

    showModal = () => {
        this.modal?.show();
    }

    hideModal = () => {
        this.modal?.hide(this.onHidden);
    }

    onHidden = () => {
        const {onHidden} = this.props;
        if(onHidden) onHidden();
    }

    onSelect = (date: Date) => {
        const { onSelect, isHideOnSelect  } = this.props;
        if(isHideOnSelect) this.hideModal();
        if(onSelect) onSelect(date);
    }

    render(){
        const { locale, color, button,  onForward, onBack, style, initialDate, language } = this.props;
        const Button = button ?
            <TouchableOpacity onPress={this.showModal}>
                {button}
            </TouchableOpacity> :
            null;
            
        return(
            <Modal
                ref={ref => this.modal = ref}
                button={Button || <Text onPress={this.showModal}>Open</Text>}
            >
                <DatePicker
                    locale={locale}
                    color={color}
                    onSelect={this.onSelect}
                    onForward={onForward}
                    onBack={onBack}
                    style={style}
                    initialDate={initialDate}
                    language={language}
                />
            </Modal>
        );
    }
}

export default ModalDatePicker;