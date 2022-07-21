import * as PurposeActionCreators from '../actions-creators/purpose'
import * as ProgramActionCreators from '../actions-creators/program'
import * as FaqActionCreators from '../actions-creators/faq'
import * as ModalActionCreators from '../actions-creators/modal'

export default {
	...PurposeActionCreators,
	...ProgramActionCreators,
	...FaqActionCreators,
	...ModalActionCreators,
}
