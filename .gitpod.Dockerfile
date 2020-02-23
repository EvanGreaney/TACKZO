FROM gitpod/workspace-full
                    
USER gitpod

RUN npm install -g ionic@5.21.5 \
    && npm install -g cordova 