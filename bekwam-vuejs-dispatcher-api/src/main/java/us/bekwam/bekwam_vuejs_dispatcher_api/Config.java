/*
 * Copyright 2021 Bekwam, Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package us.bekwam.bekwam_vuejs_dispatcher_api;

import java.util.Objects;

/**
 * Transport object for Config information
 *
 * @author carl
 */
public class Config {

    private String key;
    private String subsystemName;
    private String appName;

    public Config(String key) {
        this(key, "", "");
    }

    public Config(String key, String subsystemName, String appName) {
        this.key = key;
        this.subsystemName = subsystemName;
        this.appName = appName;
    }

    public String getKey() {
        return key;
    }

    public String getSubsystemName() {
        return subsystemName;
    }

    public String getAppName() {
        return appName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Config config = (Config) o;
        return key.equals(config.key);
    }

    @Override
    public int hashCode() {
        return Objects.hash(key);
    }


    @Override
    public String toString() {
        return "Config{" +
                "key='" + key + '\'' +
                ", subsystemName='" + subsystemName + '\'' +
                ", appName='" + appName + '\'' +
                '}';
    }
}
