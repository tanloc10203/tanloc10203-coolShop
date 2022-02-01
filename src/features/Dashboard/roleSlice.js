import { faCheck, faExclamationTriangle, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { roleApi } from "apis";
import { toast } from "react-toastify";

const initialState = {
  data: null,
  loading: false,
  create: false,
}

const getRoles = createAsyncThunk("role/get", async (token) => {
  const response = await roleApi.getRole(token);
  return response;
});

const createRole = createAsyncThunk("role/create", async ({ data, token }) => {
  const response = await roleApi.createRole({ data, token });
  return response;
});

const updateRole = createAsyncThunk("role/update", async ({ id, token, data }) => {
  const response = await roleApi.updateRole({ id, token, data });
  return response;
});

const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {},
  extraReducers: {
    [getRoles.pending]: state => {
      state.loading = true;
    },
    [getRoles.fulfilled]: (state, { payload }) => {
      state.loading = false;

      const { error, data } = payload;

      if (error === 0 && data) {
        state.data = data;
        state.create = false;
      }
    },
    [getRoles.rejected]: state => {
      state.loading = false;
      state.data = [];
    },
    [createRole.fulfilled]: (state, { payload }) => {
      const { error } = payload;

      switch (error) {
        case 0:
          state.create = true;
          toast.success("Thêm quyền thành công!", {
            icon: <FontAwesomeIcon className="text-success" icon={faCheck} />
          });
          break;
        case 3:
          toast.warning("Tên quyền đã tồn tại!", {
            icon: <FontAwesomeIcon className="text-warning" icon={faStar} />
          });
          break
        case 4:
          toast.warning("Mã quyền đã tồn tại!", {
            icon: <FontAwesomeIcon className="text-warning" icon={faStar} />
          });
          break
        default:
          throw new Error("Error from severs...");
      }
    },
    [updateRole.fulfilled]: (state, { payload }) => {
      const { error } = payload;

      switch (error) {
        case 0:
          toast.success("Cập nhật thành công", {
            icon: <FontAwesomeIcon className="text-success" icon={faCheck} />
          })
          state.create = true;
          break;
        case 2:
          toast.error("Id không tồn tại", {
            icon: <FontAwesomeIcon className="text-danger" icon={faExclamationTriangle} />
          });
          break
        case 3:
          toast.warning("Tên quyền đã tồn tại!", {
            icon: <FontAwesomeIcon className="text-warning" icon={faStar} />
          });
          break
        case 4:
          toast.warning("Mã quyền đã tồn tại!", {
            icon: <FontAwesomeIcon className="text-warning" icon={faStar} />
          });
          break
        default:
          throw new Error("Error from severs...");
      }
    }
  },
});

const { reducer } = roleSlice;
export { getRoles, createRole, updateRole };
export default reducer;