// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';

import {getCurrentUserId} from 'mattermost-redux/selectors/entities/users';
import {getInt} from 'mattermost-redux/selectors/entities/preferences';
import {savePreferences} from 'mattermost-redux/actions/preferences';
import {GenericAction} from 'mattermost-redux/types/actions';

import {closeMenu as closeRhsMenu} from 'actions/views/rhs';
import {Preferences} from 'utils/constants';
import {GlobalState} from 'types/store';

import TutorialTip from './tutorial_tip';

function mapStateToProps(state: GlobalState) {
    const currentUserId = getCurrentUserId(state);
    return {
        currentUserId,
        step: getInt(state, Preferences.TUTORIAL_STEP, currentUserId, 0),
    };
}

function mapDispatchToProps(dispatch: Dispatch<GenericAction>) {
    return {
        actions: bindActionCreators({
            closeRhsMenu,
            savePreferences,
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TutorialTip);
