import React, { useState } from 'react';

const ContinueLearningContext = React.useContext();

const ContinueLearningProvider = (props) => {
    const [continueLearning, setContinueLearning] = useState([]);

    return (
        <ContinueLearningContext.Provider value={{ continueLearning, setContinueLearning }}>
            {props.children}
        </ContinueLearningContext.Provider>
    )
}

export { ContinueLearningProvider, ContinueLearningContext }