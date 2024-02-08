import { test, expect } from '@playwright/test';

test.describe('Request tests', () => {
    test("POST", async({request})=> {
        const newUser = await request.post(`https://reqres.in/api/users`, {
            data: {
                "email": "olehthetester@qa.test",
                "name": "Oleh",
                "surname": "Baraban"
            }
        })
        console.log(await newUser.json());

        expect(newUser.ok());
    });

    test("PUT", async({request})=> {
        const puttedUser = await request.put(`https://reqres.in/api/users/953`, {
            data:{
                "email": "notolehtester@qa.test",
                "name": "Tolik",
                "surname": "Bolik"
            }
        });
        console.log(await puttedUser.json());

        let response = await puttedUser.json();

        expect(response.email).toBe("notolehtester@qa.test");
        expect(response.name).toBe("Tolik");
        expect(response.surname).toBe("Bolik")
    });

    test("PATCH", async({request})=> {
        const patchedUser = await request.patch(`https://reqres.in/api/users/953`, {
            data:{
                "email": "patchednotoleh@qa.test",
                "name": "Pasha",
                "surname": "Pashtet",
                "hobby": "Warhammer 40000"
            }
        });
        console.log(await patchedUser.json());

        let response = await patchedUser.json();

        expect(response.email).toBe("patchednotoleh@qa.test");
        expect(response.name).toBe("Pasha");
        expect(response.surname).toBe("Pashtet");
        expect(response.hobby).toBe("Warhammer 40000");
    });

    test("DELETE", async({request})=> {
        const deletedUser = await request.delete(`https://reqres.in/api/users/953`);

        expect(deletedUser.status()).toBe(204);
    });
});