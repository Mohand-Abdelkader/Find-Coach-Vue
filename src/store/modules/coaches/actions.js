export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    const response = await fetch(
      `https://find-coach-vue-9b64c-default-rtdb.firebaseio.com/coahces/${userId}.json`,
      {
        method: "PUT",
        body: JSON.stringify(coachData),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      //error need to be handled
    }

    context.commit("registerCoach", {
      ...coachData,
      id: userId,
    });
  },

  async loadCoaches(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }
    const response = await fetch(
      `https://find-coach-vue-9b64c-default-rtdb.firebaseio.com/coahces.json`
    );
    const data = await response.json();

    if (!response.ok) {
      //error handel
      const error = new Error(data.message || "failed to fetch!");
      throw error;
    }
    const coaches = [];
    for (const key in data) {
      const coach = {
        id: key,
        firstName: data[key].firstName,
        lastName: data[key].lastName,
        description: data[key].desc,
        hourlyRate: data[key].hourlyRate,
        areas: data[key].areas,
      };
      coaches.push(coach);
    }

    context.commit("setCoaches", coaches);
    context.commit("setLastFetch");
  },
};
