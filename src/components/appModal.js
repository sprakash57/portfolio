import React from 'react';

const AppModal = ({ show, content }) => {
    const { url, title, stack, body } = content;
    return (
        <div className="modal" tabIndex="-1" role="dialog" id={show}>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <small className='text-muted mb-3'>Tech stack: {stack}</small>
                        <p className="text-justify">{body}</p>
                    </div>
                    <div class="modal-footer">
                        <a href={url} target="_blank">Visit</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppModal;