import React, { PropTypes } from 'react';

import ProfileCard from './ProfileCard';
import Button from './Button';

const ProfileList = ({ list, removeItem }) => {
  return (
    <div className="p2 border">
      {
        (() => {
          if (list.length === 0) {
            return (
              <div>No profiles! Try creating one!</div>
            );
          }

          return list.map((i, idx) => {
            return (
                <ProfileCard key={ idx }>
                  <h3>{ i.name }</h3>
                  <p>{ i.description }</p>
                  <p>
                    <Button
                      status="danger"
                      type="button"
                      onClick={ () => removeItem(i.id) }>
                      Delete
                    </Button>
                  </p>
                </ProfileCard>
            );
          });
        })()
      }
    </div>
  );
};

ProfileList.propTypes = {
  /**
   * Array of profiles to render
   */
  list: PropTypes.array,
  /**
   * The function to perform to invoke an item from the list
   */
  removeItem: PropTypes.func,
};
ProfileList.defaultProps = {
  list: [],
  removeItem: () => {},
};

export default ProfileList;
