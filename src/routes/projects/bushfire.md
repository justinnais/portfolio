---
name: 'CSIRO DSS'
date: '2022-06-06'
tags: ['React', 'JavaScript', 'd3', 'GitHub Actions']
category: 'uni'
summary: 'React dashboard for the CSIRO Decision Support System, helping present vital information to aid bushfire evacuations'
---

The Evacuation Modelling Decision Support System (DSS) is a software application that is intended as an aid to:

- Carry out a preliminary analysis of the potential impact of a predicted hazard on a road network
- Design an evacuation scenario to be simulated
- Run an evacuation simulation
- Visualize the outcome of the simulated evacuation and produce summary results

Our teams responsibility was to create a dashboard to display the results of the MATsim evacuation scenario, with the goal of assisting users in making the best possible decision from a quick glance.

Based on the experience of the team, we opted to use React and JavaScript. We built the app with Vite and deployed with GitHub Actions pipelines. Visual information was key for this project, which made d3 a great choice for our charts.
