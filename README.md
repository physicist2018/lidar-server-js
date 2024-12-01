# lidar-server-js

REST API для взаимодействия с данными лидаров

# Описание формата хранимых данных

```js
class Experiment{
    id
    datetime
    title
    comments
    vert_res
    accum_time

    ProfilesDat[]{

    }

    ProfilesDak[] {

    }

    Combined[]{

    }

    backgroud_alt
    background_val

    Procesed[]{

    }

    MolecularProfile {

    }
}

Profile {
    start_dt
    stop_dt
    reprate
    prof_len
    num_profs
    data []
}

MoleculatProfile {
    latitude, longitude
    Rho[]
}

Processed {

}
```
