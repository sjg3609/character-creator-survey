import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function SurveyName() {
  const history = useHistory();
  const dispatch = useDispatch();
  const characterName = useSelector(store => store.charReducers.characterName);


  const nextPage = () => {
    if (characterName === '') {
      alert(`Please enter your character's name`)
      return;
    } else {
      history.push('/survey-page-2');
    }
  }

  const backToHome = () => {
    dispatch({ type: 'CLEAR_NAME_AND_CAMPAIGN' })
    history.push('/');
  }

  const handleCharNameChange = (event) => {
    let action = { type: 'SET_CHARACTER_NAME', payload: event.target.value };
    dispatch(action)
  }

  const handlecampaignNameChange = (event) => {
    dispatch({ type: 'SET_CAMPAIGN_NAME', payload: event.target.value })
  }

  return (
    <>
      <center>
        <div>
          <h2>What is your character's name?</h2>
          <br />
          <input onChange={handleCharNameChange} placeholder="e.g. Leo B. Tronx" required />
        </div>
        <div>
          What campaign is this character in? (optional)
          <br />
          <input onChange={handlecampaignNameChange} placeholder="e.g. Icronus Campaign" />
        </div>
        <button className='btn' onClick={backToHome} >Back to home</button>
        {'   '}
        <button className='btn' onClick={nextPage}>Next Page</button>
      </center>

    </>
  )
}

export default SurveyName;