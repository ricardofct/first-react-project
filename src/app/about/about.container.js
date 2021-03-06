import { connect } from 'react-redux';

import { actions } from '@state';

const mapStateToProps = (state) => ({
    counter: state.counter,
});

const mapDispatchToProps = {
    decrement: actions.counterActions.Decrement,
    increment: actions.counterActions.Increment,
    load: actions.counterActions.LoadRequest,
};

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default HomeContainer;