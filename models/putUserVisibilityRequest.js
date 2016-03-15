/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PutUserVisibilityRequest class.
 * @constructor
 * Request to put (update) user visibility
 * @member {string} visibility Gets or sets visibility of the user. Possible
 * values include: 'Public', 'Private'
 * 
 */
function PutUserVisibilityRequest() {
}

/**
 * Defines the metadata of PutUserVisibilityRequest
 *
 * @returns {object} metadata of PutUserVisibilityRequest
 *
 */
PutUserVisibilityRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PutUserVisibilityRequest',
    type: {
      name: 'Composite',
      className: 'PutUserVisibilityRequest',
      modelProperties: {
        visibility: {
          required: true,
          serializedName: 'visibility',
          type: {
            name: 'Enum',
            allowedValues: [ 'Public', 'Private' ]
          }
        }
      }
    }
  };
};

module.exports = PutUserVisibilityRequest;