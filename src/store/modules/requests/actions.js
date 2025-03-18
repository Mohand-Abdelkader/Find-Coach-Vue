export default {
  async contactCoach(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message,
    };
    const response = await fetch(
      `https://find-coach-vue-9b64c-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
      {
        method: "POST",
        body: JSON.stringify(newRequest),
      }
    );

    if (!response.ok) {
      //
      const error = new Error(data.message || "failed to fetch!");
      throw error;
    }
    const responseData = await response.json();

    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;
    context.commit("addRequest", responseData);
  },

  async fetchRequest(context) {
    const coachId = context.rootGetters.userId;
    const token = context.rootGetters.token;
    const response = await fetch(
      `https://find-coach-vue-9b64c-default-rtdb.firebaseio.com/requests/${coachId}.json?auth=${token}`
    );
    if (!response.ok) {
      const error = new Error(data.message || "failed to fetch!");
      throw error;
    }

    const responseData = await response.json();
    const requests = [];
    for (const key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      };
      requests.push(request);
    }

    context.commit("setRequest", requests);
  },
};
