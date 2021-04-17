import React from 'react';
import './emailNotification.scss';

export default function EmailNotification({notificationObject, dismissNotification}) {
    document.body.classList.add('modalShowing')
    const error = notificationObject.error;
    const messages = notificationObject.messages;
    return (
        <div id={'transparentBG'}
             className={(notificationObject.fadeOut ? 'fadeOut' : '')}
             onClick={onDismiss}>
            <div
                id={'emailNotification'}
                onClick={e => {
                    e.stopPropagation();
                    e.preventDefault();
                }}
            >
                <div id={'notificationHeader'}>{notificationObject.header}</div>
                <div id={'notificationMessageHolder'}>
                    {messages.map(message => {
                        const classes = 'notificationMessage ' + (error ? 'error' : 'success');
                        return (
                            <div className={classes} key={message}>{message}</div>
                        )
                    })}
                </div>
                <div id={'dismissInstructions'}
                     onClick={onDismiss}
                >(Click here to dismiss, or wait 5 seconds)
                </div>
            </div>
        </div>
    )


    function onDismiss(e) {
        e.stopPropagation();
        e.preventDefault();
        document.body.classList.remove('modalShowing')
        dismissNotification();
    }

}
